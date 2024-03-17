import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type TasksDocument = HydratedDocument<Tasks>;

@Schema()
export class Tasks {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: string;

  @Prop()
  status: string;

  @Prop()
  description: string;

  @Prop()
  user_id: string;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
