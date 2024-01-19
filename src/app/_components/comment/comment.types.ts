import {ComponentBase} from "@/app/types/component-base.type";
import {Comment} from "@/types/comment.interface";

export type CommentProps = Omit<ComponentBase, "isDisabled" | "size"> & Comment;