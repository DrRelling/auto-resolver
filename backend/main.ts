import { Battle } from './classes/battle';
import { Jaeger } from './classes/jaeger';
import { Kaiju } from './classes/kaiju';


const jaegers: Jaeger[] = [];
const kaiju: Kaiju[] = [];

for (let i = 0; i < 3; i++) {
  jaegers.push(new Jaeger());
  kaiju.push(new Kaiju());
}

new Battle(jaegers, kaiju);
