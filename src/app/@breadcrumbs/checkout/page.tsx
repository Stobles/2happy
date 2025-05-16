import Breadcrumbs from "@/shared/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/UI/Breadcrumb";
import { paths } from "@/config/paths";
import { Button } from "@/shared/components/UI/Button";
import Link from "next/link";

const CheckoutBreadcrumbs = () => {
  return (
    <Breadcrumbs
      rightSlot={
        <Button size="large" asChild>
          <Link href={paths.checkout.getHref()}>Продолжить покупки</Link>
        </Button>
      }
    >
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={paths.home.getHref()}>Главная</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Оформление заказа</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default CheckoutBreadcrumbs;
