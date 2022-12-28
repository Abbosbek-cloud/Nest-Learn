import { Controller } from '@nestjs/common';
import { KonkursService } from './konkurs.service';

@Controller('konkurs')
export class KonkursController {
  constructor(private konkursService: KonkursService) {}
}
