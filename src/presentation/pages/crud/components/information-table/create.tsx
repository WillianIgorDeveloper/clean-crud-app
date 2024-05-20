import { Button } from "@/presentation/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/presentation/components/ui/dialog"
import { Input } from "@/presentation/components/ui/input"
import { Label } from "@/presentation/components/ui/label"
import { useCreateInformation } from "@/presentation/hooks/state-manager/information/create-information"

export function Create() {
  const { mutateAsync } = useCreateInformation()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const title = values.get("title") as string
    const description = values.get("description") as string
    if (!title || !description) return
    mutateAsync({ title, description })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input id="description" name="description" />
          </div>
          <DialogClose asChild>
            <Button type="submit" className="mt-3">
              Create
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  )
}
