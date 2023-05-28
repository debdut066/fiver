import Gig from "../Schema/gig.Schema.js";

export const SaveNewGig = async (userId, body) => {
    try{
        const newGig = new Gig({
            userId : userId,
            ...body
        })
        const gig = await newGig.save();
        return gig;
    }catch(error){
        throw error;
    }
}

export const FindGigAndReturn = async (Id) => {
    try{
        const gig = await Gig.findById(Id).populate('userId');
        return gig;
    }catch(error){
        throw error;
    }
}

export const DeleteGig = async (Id) => {
    try {
        await Gig.findByIdAndDelete(Id);
        return "Gig has been deleted!"
    } catch (error) {
        throw error;
    }
}

export const GetGig = async (filters, sort) => {
    try {
        const gigs = await Gig.find(filters)
            .populate("userId")
            .sort({ [sort]: -1 });
        
        return gigs;
    } catch (error) {
        throw error
    }
}