import { ButtonLoader } from "@/shared/components/UI/Button";
import { Skeleton } from "@/shared/components/UI/Skeleton";

const ProfileTabLoader = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <Skeleton className="w-full h-[56px]" />
      <div className="grid grid-cols-2 gap-6">
        <Skeleton className="w-full h-[56px]" />
        <Skeleton className="w-full h-[56px]" />
        <Skeleton className="w-full h-[56px]" />
        <Skeleton className="w-full h-[56px]" />
        <Skeleton className="w-full h-[56px]" />
        <Skeleton className="w-full h-[56px]" />
      </div>
      <ButtonLoader className="w-full" size="normal" />
    </div>
  );
};

export default ProfileTabLoader;
