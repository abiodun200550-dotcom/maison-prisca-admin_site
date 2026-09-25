export type Product={ $id?:string; name:string; slug:string; category:string; description:string; price:number; sizes:string[]; colours:string[]; fabric?:string; image:string; gallery?:string[]; status:'Published'|'Draft'|'Sold out'|'Coming soon'; featured?:boolean; hasDiscount?:boolean; originalPrice?:number; discountLabel?:string };
export type OrderStatus='New'|'Confirmed'|'Processing'|'Ready'|'Completed';
export type OrderItem={productId:string;name:string;size:string;quantity:number;price:number};
export type StoreOrder={ $id?:string; orderNumber:string; customerName:string; customerPhone:string; customerEmail?:string; deliveryAddress:string; deliveryCity:string; deliveryState:string; deliveryNote?:string; items:string; subtotal:number; total:number; status:OrderStatus; ref?:string; $createdAt?:string };
export const money=(n:number)=>n>0?`₦${new Intl.NumberFormat('en-NG').format(n)}`:'Price on request';
export const whatsappNumber=(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||'2348145000582').replace(/\D/g,'');
export const slugify=(value:string)=>value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export function waLink(phone:string,text:string){const number=phone.replace(/\D/g,'');const normalized=number.startsWith('0')?`234${number.slice(1)}`:number;return `https://wa.me/${normalized}?text=${encodeURIComponent(text)}`;}
