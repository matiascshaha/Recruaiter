import { prisma } from './index';
import argon2 from 'argon2';

async function main() {
  const org = await prisma.organization.upsert({
    where: { id: 'seed-org' },
    update: {},
    create: { id: 'seed-org', name: 'Recruaiter Inc', domain: 'recruaiter.ai' },
  });

  const adminEmail = 'admin@recruaiter.ai';
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: { email: adminEmail, name: 'Admin', role: 'ADMIN', organizationId: org.id },
  });

  const hash = await argon2.hash('ChangeMe123!');
  await prisma.userCredential.upsert({
    where: { userId: admin.id },
    update: { passwordHash: hash },
    create: { userId: admin.id, passwordHash: hash },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

