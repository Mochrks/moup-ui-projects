export const sampleCodeAlert = `
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
`.trim();

export const sampleCodeAlertDestructive = `
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired.</AlertDescription>
</Alert>
`.trim();

export const sampleCodeAlertSuccess = `
<Alert className="border-green-200 bg-green-50/50 text-green-900">
  <CheckCircle2 className="h-4 w-4 text-green-600" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Payment processed successfully.</AlertDescription>
</Alert>
`.trim();

export const sampleCodeAlertAction = `
<Alert className="flex items-center justify-between gap-4">
  <div className="flex items-start gap-4">
    <ShieldAlert className="h-5 w-5" />
    <div>
      <AlertTitle>Two-Factor Auth</AlertTitle>
      <AlertDescription>Secure your account today.</AlertDescription>
    </div>
  </div>
  <Button size="sm">Enable</Button>
</Alert>
`.trim();
