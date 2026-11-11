import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IInquiry extends Document {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  country?: string;
  requirement?: string;
  product?: string;
  quantity?: string;
  subject?: string;
  moldCategory?: string;
  projectDetails: string;
  source?: string;
  status: 'pending' | 'reviewed' | 'contacted' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: '', trim: true },
    companyName: { type: String, default: '', trim: true },
    country: { type: String, default: '', trim: true },
    requirement: { type: String, default: '', trim: true },
    product: { type: String, default: '', trim: true },
    quantity: { type: String, default: '', trim: true },
    subject: { type: String, default: '', trim: true },
    moldCategory: { type: String, default: 'General / Precision Mould' },
    projectDetails: { type: String, default: '' },
    source: { type: String, default: 'Home Page - Request Technical Quotation' },
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'contacted', 'closed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

export const Inquiry: Model<IInquiry> =
  mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);

