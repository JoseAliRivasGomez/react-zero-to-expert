import { dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'

import enUS from 'date-fns/locale/en-US'
import esES from 'date-fns/locale/es'

const locales = {
    'es': esES,
    //'en-US': enUS,
}

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })