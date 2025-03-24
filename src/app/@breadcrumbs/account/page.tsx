import Breadcrumbs from "@/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/UI/Breadcrumb";
import { paths } from "@/config/paths";

const AccountBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={paths.home.getHref()}>Главная</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Аккаунт</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default AccountBreadcrumbs;
