import type { Information } from "@/models/core/entities"
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
import { useUpdateInformation } from "@/presentation/hooks/state-manager/information"
import { Edit2Icon } from "lucide-react"

type EditProps = {
  information: Information
}

export function Edit({ information }: EditProps) {
  const { mutate } = useUpdateInformation()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const title = values.get("title") as string
    const description = values.get("description") as string
    if (!title || !description) return
    mutate({
      information: {
        ...information,
        title,
        description,
      },
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="secondary">
          <Edit2Icon size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit this information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" defaultValue={information.title} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              defaultValue={information.description}
            />
          </div>
          <DialogClose asChild>
            <Button type="submit" className="mt-3">
              Edit
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  )
}
