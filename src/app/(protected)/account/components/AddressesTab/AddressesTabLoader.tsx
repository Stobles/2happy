import { Skeleton } from "@/shared/components/UI/Skeleton";

const AddressesTabLoader = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <Skeleton className="w-full h-[56px]" />
      <Skeleton className="w-full h-[288px]" />
      <Skeleton className="w-full h-[288px]" />
      <Skeleton className="w-full h-[144px]" />
    </div>
  );
};

export default AddressesTabLoader;
