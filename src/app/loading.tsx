/** biome-ignore-all lint/suspicious/noArrayIndexKey: does not matter */
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';

export default function EventListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="space-y-2">
              <Skeleton className="h-4 w-96" />
              <Skeleton className="h-4 w-80" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4 w-60" />
            </CardDescription>
            <CardAction>
              <Skeleton className="h-5 w-16" />
            </CardAction>
          </CardHeader>
          <CardFooter className="justify-between">
            <Skeleton className="h-9 w-42" />
            <Skeleton className="h-9 w-52" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
