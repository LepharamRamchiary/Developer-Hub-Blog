import { errorHandler } from "../utils/error.js";
import Comment from "../models/comment.model.js"

export const createComment = async (req, res, next) => {
    try {
        const { content, userId, postId } = req.body;

        if (userId !== req.user.id) {
            return next(errorHandler(403, "You are not allowed to cerate a comment"));
        }

        const newComment = new Comment({
            content,
            postId,
            userId
        });

        await newComment.save();

        res.status(200).json(newComment);

    } catch (error) {
        next(error)
    }
};

export const getPostComment = async (req, res, next) => {
    try {
    const comment = await Comment.find({postId: req.params.postId}).sort({
        createdAt: -1,
    });
    res.status(200).json(comment);
    } catch (error) {
        next(error);
    }
}