# Component Implementation Examples

## CandidateCard Component (Reference Implementation)
Perfect example of how all components should be structured:

```typescript
// Full implementation showing all patterns
interface CandidateCardProps {
  candidate: Candidate;
  onStatusChange: (candidateId: string, status: CandidateStatus) => void;
  onContactCandidate: (candidateId: string) => void;
  variant?: 'compact' | 'detailed';
  className?: string;
}

export const CandidateCard = React.memo<CandidateCardProps>(({ 
  candidate, 
  onStatusChange, 
  onContactCandidate, 
  variant = 'detailed',
  className 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleStatusChange = useCallback((status: CandidateStatus) => {
    onStatusChange(candidate.id, status);
  }, [candidate.id, onStatusChange]);
  
  const statusColor = useMemo(() => {
    const colors = {
      sourced: 'bg-gray-100 text-gray-800',
      contacted: 'bg-blue-100 text-blue-800',
      qualified: 'bg-green-100 text-green-800',
      interviewing: 'bg-yellow-100 text-yellow-800',
      hired: 'bg-emerald-100 text-emerald-800',
      rejected: 'bg-red-100 text-red-800'
    } as const;
    return colors[candidate.status] || colors.sourced;
  }, [candidate.status]);
  
  return (
    <Card className={cn("candidate-card", className)} data-testid={`candidate-${candidate.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={candidate.avatar} alt={candidate.name} />
              <AvatarFallback>{candidate.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{candidate.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{candidate.title}</p>
            </div>
          </div>
          <Badge className={statusColor}>{candidate.status}</Badge>
        </div>
      </CardHeader>
      
      {variant === 'detailed' && (
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span>AI Score</span>
              <div className="flex items-center space-x-2">
                <Progress value={candidate.aiScore} className="w-16" />
                <span className="font-medium">{candidate.aiScore}%</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {candidate.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {candidate.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{candidate.skills.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      )}
      
      <CardFooter className="pt-3">
        <div className="flex space-x-2 w-full">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onContactCandidate(candidate.id)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Change Status <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Object.values(CandidateStatus).map((status) => (
                <DropdownMenuItem 
                  key={status} 
                  onClick={() => handleStatusChange(status)}
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  );
});
```

