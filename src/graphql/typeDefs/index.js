import user from "./user";
import root from "./root";

const { userType } = require("./types/user");


import branch from "./branch";
import { BranchType } from "./types/branch"

import coupon from "./coupon";
import { CouponType } from "./types/coupon"

import category from "./category";
import { CategoryType } from "./types/category"

import deal from "./deal";
import { DealType } from "./types/deal"

import gallery from "./gallery";
import { GalleryType } from "./types/gallery"

import item from "./item";
import { ItemType } from "./types/item"

import order from "./order";
import { OrderType } from "./types/order"

import tag from "./tag";
import { TagType } from "./types/tag"

export default [
    user, userType,
    branch, BranchType,
    coupon, CouponType,
    category, CategoryType,
    deal, DealType,
    gallery, GalleryType,
    item, ItemType,
    order, OrderType,
    tag, TagType,

    root
];
