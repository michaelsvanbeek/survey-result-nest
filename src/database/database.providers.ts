import * as mongoose from 'mongoose';

const mongooseOptions = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest', mongooseOptions),
  },
];
