export const sampleCodeLoading = `
import { Loader2 } from "lucide-react"

export function LoadingDemo() {
  return <Loader2 className="animate-spin" />
}
`.trim();

export const sampleCodeSkeleton = `
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
`.trim();

export const sampleCodePagination = `
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination"

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
`.trim();

export const sampleCodeTable = `
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow><TableHead>Head</TableHead></TableRow>
      </TableHeader>
      <TableBody>
        <TableRow><TableCell>Cell</TableCell></TableRow>
      </TableBody>
    </Table>
  )
}
`.trim();

export const sampleCodeCalendar = `
import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  return <Calendar mode="single" />
}
`.trim();
