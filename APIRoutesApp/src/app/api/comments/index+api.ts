import { comments } from "../../../../data/comments";

export async function GET(){
    return Response.json(comments);
}

export async function POST(req:Request){
    const {text} = await req.json();
    const newComment = {id:comments.length + 1, text}
    comments.push(newComment);
    return Response.json(newComment,{status:201})
}

export async function DELETE(request:Request,{id}:Record<string,string>){
    const comment = comments.find((comment) => comment.id === parseInt(id))
    if(!comment){
        return Response.json({error: "Comment not found"},{status:404});
    }
    comments.splice(comments.indexOf(comment),1);
    return Response.json({message:"Comment Deleted"});
}