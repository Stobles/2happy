import Container from "@/shared/components/UI/Container";
import { RefObject } from "react";
import Link from "next/link";
import { paths } from "@/config/paths";
import { HELP_TABS } from "@/features/User/utils/isValidHelpTab";
import { useDelayedState } from "@/shared/hooks/useDelayedState";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/UI/DropdownMenu";
import HelpDialog from "../../HelpDialog/HelpDialog";

const UpperHeader = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {
  const { state: open, setFastState, setDelayedState } = useDelayedState(false);

  const onMouseEnter = () => {
    setFastState(true);
  };

  const onMouseLeave = () => {
    setDelayedState(false, 300);
  };

  return (
    <div
      ref={ref}
      className="min-h-[56px] border-b-[1px] border-main z-header bg-white "
    >
      <Container className="h-full items-center justify-end gap-5">
        <DropdownMenu open={open} onOpenChange={(open) => setFastState(open)}>
          <HelpDialog onClick={() => setFastState(false)}>
            <DropdownMenuTrigger
              onMouseOver={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span className="text-button-xs link-hover">Помощь</span>
            </DropdownMenuTrigger>
          </HelpDialog>

          <DropdownMenuContent
            className="min-w-[272px] z-over-header"
            align="end"
            onMouseOver={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link href={paths.help.getHref({ tab: HELP_TABS.REFUNDS })}>
              <DropdownMenuItem>Вовзрат / Обмен</DropdownMenuItem>
            </Link>
            <Link href={paths.help.getHref({ tab: HELP_TABS.DELIVERY })}>
              <DropdownMenuItem>Доставка и оплата</DropdownMenuItem>
            </Link>
            <Link href={paths.help.getHref({ tab: HELP_TABS.KASPI })}>
              <DropdownMenuItem>Рассрочка от KASPI RED</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href={paths.help.getHref({ tab: HELP_TABS.REFUNDS })}
          className="text-button-xs link-hover"
        >
          Контакты
        </Link>
      </Container>
    </div>
  );
};

export default UpperHeader;
