// -- Transforms -----

import {extend} from 'vega-util';
import {transforms} from 'vega-dataflow';
import * as tx from 'vega-transforms';
import * as vtx from 'vega-view-transforms';
import * as encode from 'vega-encode';
import * as geo from 'vega-geo';
import * as force from 'vega-force';
import * as label from 'vega-label';
import * as hierarchy from 'vega-hierarchy';
import * as regression from 'vega-regression';
import * as voronoi from 'vega-voronoi';
import * as wordcloud from 'vega-wordcloud';
import * as crossfilter from 'vega-crossfilter';
extend(
  transforms,
  tx, vtx, encode, geo, force, label, hierarchy,
  regression, voronoi, wordcloud, crossfilter
);


// -- Exports -----

export {
  version
} from './package.json';

export * from 'vega-statistics';

export * from 'vega-time';

export * from 'vega-util';

export * from 'vega-loader';

export * from 'vega-scenegraph';

export {
  Dataflow,
  EventStream,
  Parameters,
  Pulse,
  MultiPulse,
  Operator,
  Transform,
  changeset,
  ingest,
  isTuple,
  definition,
  transform,
  transforms,
  tupleid
} from 'vega-dataflow';

export {
  scale,
  scheme,
  interpolate,
  interpolateColors,
  interpolateRange,
  quantizeInterpolator
} from 'vega-scale';

export {
  projection
} from 'vega-projection';

export {
  View
} from 'vega-view';

export {
  expressionFunction,
  formatLocale,
  timeFormatLocale
} from 'vega-functions';

export {
  parse
} from 'vega-parser';

export {
  parse as runtime,
  context as runtimeContext
} from 'vega-runtime';
