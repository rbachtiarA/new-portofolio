export default function PageTitle() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full">
      <h1 className="font-bold text-lg"># Welcome</h1>
      <span className="hidden sm:block text-muted-foreground">•</span>
      <span className="text-muted-foreground">
        Hi, welcome to my portofolio
      </span>
    </div>
  );
}
