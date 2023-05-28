import createError from "../utils/createError.js";
import * as GigModel from "../models/gig.models.js"

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a gig!"));

  try {
    const newGig = await GigModel.SaveNewGig(req.userId, req.body); 
    return res.status(201).json(newGig);
  } catch (error) {
    next(error);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await GigModel.FindGigAndReturn(req.params.id);

    if (gig.userId !== req.userId)
      return next(createError(403, "You can delete only your gig!"));

    const deletedGig = await GigModel.DeleteGig(req.params.id)
    res.status(200).send(deletedGig);
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await GigModel.FindGigAndReturn(req.params.id);

    if (!gig) next(createError(404, "Gig not found"));
    return res.status(200).send(gig);
  
  } catch (error) {
    next(error);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {

    const gigs = await GigModel.GetGig(filters, q.sort);
    res.status(200).send(gigs);

  } catch (error) {
    console.log(error)
    next(error);
  }
};
