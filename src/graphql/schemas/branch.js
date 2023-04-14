import Joi from "./joi";

const id = Joi.string().objectId().label('ID');

const lat = Joi.number()
    .required()
    .label('Latitude');

const lng = Joi.number()
    .required()
    .label('Longitude');

const dayTime = Joi.object({
    Open: Joi.string().required(),
    Close: Joi.string().required(),
});

const pin = Joi.object({
    Lat: lat,
    Lng: lng,
});

const statusSchema = Joi.string().valid('DISABLED', 'PENDING', 'COMMING_SOON', 'ACTIVE').default('pending');

const addressSchema = Joi.object({
    Street:Joi.string().required(),
    State: Joi.string().required(),
    Country: Joi.string().required(),
    City: Joi.string().required(),
    Zip: Joi.number().required(),
})


const openingClosingTime = Joi.object({
    Monday: dayTime,
    Tuesday: dayTime,
    Wednesday: dayTime,
    Thursday: dayTime,
    Friday: dayTime,
    Saturday: dayTime,
    Sunday: dayTime,
});

export const createBranchSchema = Joi.object({
    Title: Joi.string().required(),
    BranchCode: Joi.string().required(),
    Email: Joi.string().email().required(),
    Phone: Joi.array().items(Joi.string()).required(),
    WebsiteUrl: Joi.string().uri().required(),
    Pin: pin.required(),
    OpeningClosingTime: openingClosingTime.required(),
    Address: addressSchema,
    Status:statusSchema,
    Timezone: Joi.string().required(),
    CreatedBy: id.required(),
    UpdatedBy: id.required(),
});

export const updateBranchSchema = Joi.object({
    Title: Joi.string().required(),
    BranchCode: Joi.string().required(),
    Email: Joi.string().email().required(),
    Phone: Joi.array().items(Joi.string()).required(),
    WebsiteUrl: Joi.string().uri().required(),
    Pin: pin.required(),
    OpeningClosingTime: openingClosingTime.required(),
    Address: addressSchema,
    Status:statusSchema,
    Timezone: Joi.string().required(),
    UpdatedBy: id.required(),
});

export const branchIdSchema = Joi.object({
    id: id,
});
