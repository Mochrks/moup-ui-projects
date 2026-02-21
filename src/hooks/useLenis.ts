import { useContext } from "react";
import { LenisContext } from "@/providers/LenisProvider";

/** Access the active Lenis instance from any component */
export const useLenis = () => useContext(LenisContext);
