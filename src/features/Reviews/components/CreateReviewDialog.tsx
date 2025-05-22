"use client";

import { useUser } from "@/shared/api/authApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import { ReactNode } from "react";

const CreateReviewDialog = ({ children }: { children: ReactNode }) => {
  const { data: user } = useUser();
  return (
    <Dialog>
      <div
        className="w-min"
        data-tooltip-id="create-review"
        data-tooltip-content="Авторизуйтесь, чтобы оставить отзыв"
      >
        <DialogTrigger disabled={!user} asChild>
          {children}
        </DialogTrigger>
        {!user && <StyledTooltip id="create-review" />}
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Титул</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateReviewDialog;
