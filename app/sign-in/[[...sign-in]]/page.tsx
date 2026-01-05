import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <SignIn afterSignInUrl="/for-you" afterSignUpUrl="/for-you" />
    </div>
  );
}
