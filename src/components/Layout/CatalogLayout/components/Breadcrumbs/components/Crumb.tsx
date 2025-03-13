import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/UI/Breadcrumb";
import Link from "next/link";
import { Breadcrumb } from "../Breadcrumbs";

const Crumb = ({
  breadcrumb,
  isLast,
}: {
  breadcrumb: Breadcrumb;
  isLast: boolean;
}) => {
  if (isLast) {
    return (
      <BreadcrumbItem>
        <BreadcrumbPage>{breadcrumb.text}</BreadcrumbPage>
      </BreadcrumbItem>
    );
  }
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href={breadcrumb.href}>{breadcrumb.text}</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator />
    </>
  );
};

export default Crumb;
