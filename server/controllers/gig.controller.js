import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a gig!"));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const saveGig = await newGig.save();
    res.status(201).json(saveGig);
  } catch (error) {
    next(error);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (gig.userId !== req.userId)
      return next(createError(403, "You can delete only your gig!"));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted!");
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = Gig.findById(req.params.id);
    if (!gig) next(createError(404, "Gig not found"));
    return res.status(200).send(gig);
  } catch (error) {
    next(error);
  }
};

export const getGigs = async (req, res, next) => {
  const { cat, userId, min, max, sort, search } = req.query;
  const filters = {
    ...(userId && { userId: userId }),
    ...(cat && { cat: cat }),
    ...((min || max) && {
      price: {
        ...(min && { $gt: min }),
        ...(max && { $lt: max }),
      },
    }),
    ...(search && { title: { $regex: search, $options: "i" } }),
  };

  try {
    const gigs = await Gig.find(filters).sort({ [sort]: -1 });
    res.status(200).send(gigs);
  } catch (error) {
    next(error);
  }
};
