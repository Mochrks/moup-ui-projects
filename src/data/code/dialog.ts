export const sampleCodeDialog = `
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Standard Modal</DialogTitle>
          <DialogDescription>Simple dialog component.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
`.trim();

export const sampleCodeDialogForm = `
<Dialog>
  <DialogContent>
    <DialogHeader><DialogTitle>Edit Profile</DialogTitle></DialogHeader>
    <div className="grid gap-4 py-4">
      <Input placeholder="Name" />
      <Input placeholder="Username" />
    </div>
    <DialogFooter><Button>Save</Button></DialogFooter>
  </DialogContent>
</Dialog>
`.trim();

export const sampleCodeDialogDelete = `
<Dialog>
  <DialogContent className="sm:max-w-[400px]">
    <DialogTitle className="text-center">Are you sure?</DialogTitle>
    <DialogDescription className="text-center">Action is permanent.</DialogDescription>
    <DialogFooter className="justify-center">
      <Button variant="destructive">Delete Account</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
`.trim();
