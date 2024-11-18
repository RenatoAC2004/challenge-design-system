import React from "react";
import { ActionButtonProps } from "../../types";
import { Container } from "../../styles";
import { LucideCheck, LucideLoaderCircle } from "lucide-react";
import { Icon } from "../Icon";

export function Root({ label, loading, saved, ...props }: ActionButtonProps) {
  return (
    <Container {...props}>
      {(loading || saved) && (
        <Icon icon={loading ? <LucideLoaderCircle /> : <LucideCheck />} isloading={loading} />
      )}
      {label}
    </Container>
  );
}
