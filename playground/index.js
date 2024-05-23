import { random, uuid, arraySplitByLimit } from '../packages/libs/index.mjs'

console.log(uuid(), arraySplitByLimit([random(), random(), uuid()], 2))
