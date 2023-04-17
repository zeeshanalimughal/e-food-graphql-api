import { getBranch, createBranch, updateBranch, deleteBranch } from "./BranchService";
import { getCategoryById, getAllCategories, createCategory, updateCategory, deleteCategory } from "./CategoryService";
import { getCoupons, getCouponById, createCoupon, updateCoupon, deleteCoupon } from "./CouponService";
import { getDeals, getDealById, createDeal, updateDeal, deleteDeal } from './DealService';
import { createGallery, deleteGallery, getGalleries, getGallery, updateGallery } from "./GalleryService";
import { createItem, updateItem, deleteItem, getItems, getItemById } from './ItemService';
import { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } from './OrderService';
import { getTags, getTagById, createTag, updateTag, deleteTag } from './TagService';
import { getUsers, getUser, createUser, updateUser, deleteUser } from './UserService';

export const BranchService = {
    getBranch,
    createBranch,
    updateBranch,
    deleteBranch
}

export const CategoryService = {
    getCategoryById,
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
}


export const CouponService = {
    getCoupons,
    getCouponById,
    createCoupon,
    updateCoupon,
    deleteCoupon
}


export const DealService = {
    getDeals,
    getDealById,
    createDeal,
    updateDeal,
    deleteDeal
}


export const GalleryService = {
    createGallery,
    deleteGallery,
    getGalleries,
    getGallery,
    updateGallery
}


export const ItemService = {
    createItem,
    updateItem,
    deleteItem,
    getItems,
    getItemById
}


export const OrderService = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}


export const TagService = {
    getTags,
    getTagById,
    createTag,
    updateTag,
    deleteTag
}


export const UserService = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}