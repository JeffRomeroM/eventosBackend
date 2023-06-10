import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportsModule } from './sports/sports.module';
import { MusicsModule } from './musics/musics.module';
import { GastronomiesModule } from './gastronomies/gastronomies.module';
import { CommercialsModule } from './commercials/commercials.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '090202',
      database: 'eventos',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    SportsModule,
    MusicsModule,
    GastronomiesModule,
    CommercialsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
