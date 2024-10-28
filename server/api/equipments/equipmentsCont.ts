import { Request, Response } from "express";
import { Equipment } from "./equipmentsModel";
import { CLOUDINARY_IMAGE_CONFIG, uploadImage } from "../../cloudinary/cloudinary";

export const getAllEquipments = async (req:Request, res:Response) => {
    const equipments = await Equipment.find();
    if(!equipments) return res.status(204).json({ 'message': 'No equipments found.' });
    res.json(equipments)
}

export const createEquipment = async (req:Request, res:Response) => {
    const { name, price, imgUrl} = req.body;

    if (!name || !price || !imgUrl) {
        return res.status(400).json( { 'message': 'Name, price and imgUrl are required'});
    }

    try {
        const cloudinaryResult = await uploadImage(imgUrl, 'equipment', CLOUDINARY_IMAGE_CONFIG);
        console.log("Cloudinary result:", cloudinaryResult);

        const result = await Equipment.create({
            name,
            price,
            imgUrl: cloudinaryResult,
        });

        res.status(201).json(result);
    } catch (error) {
        console.error(error)
    }
}

export const updateEquipment = async (req:Request, res:Response) => {
    const { id, name, price, imgUrl } = req.body;

    if (!id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const equipment = await Equipment.findOne({ _id: req.body.id }).exec();
    if (!equipment) {
        return res.status(204).json({ "message": `No equipment matches ID ${req.body.id}.` });
    }
    if (name) equipment.name = name;
    if (price) equipment.price = price;
    if (imgUrl) equipment.imgUrl = imgUrl;
    if (imgUrl) {
        try {
            const cloudinaryResult = await uploadImage(imgUrl, 'equipment', CLOUDINARY_IMAGE_CONFIG);
            equipment.imgUrl = cloudinaryResult;
        } catch (error) {
            console.error('Error uploading image to Cloudinary:', error);
            return res.status(500).json({ message: 'Error uploading image to cloudinary', error: error.message});
        }
    }

    const result = await equipment.save();
    res.json(result);
}

export const deleteEquipment = async (req:Request, res:Response) => {
    if(!req?.body?.id) return res.status(400).json({ 'message': 'Product ID required.' });

    const equipment = await Equipment.findOne({ _id: req.body.id }).exec();
    if(!equipment){
        return res.status(204).json({ "message": `No equipment matches ID ${req.body.id}.`});
    }
    const result = await equipment.deleteOne({ _id: req.body.id });
    res.json(result);
}

export const getEquipment = async (req:Request, res:Response) => {
    if(!req?.params?.id) return res.status(400).json({ 'message': 'Product ID required.' });

    const equipment = await Equipment.findOne({ _id: req.params.id }).exec();
    if(!equipment) {
        return res.status(204).json({ "message": `No equipment matches ID ${req.params.id}.` });
    }
    res.json(equipment);
}