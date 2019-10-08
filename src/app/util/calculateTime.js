import * as moment from 'moment'

export default dateTime => {
    const diff = moment(new Date()).diff(moment(dateTime))
    const duration = moment.duration(diff)

    const diffYears = parseInt(duration.asYears())
    const diffMonths = parseInt(duration.asMonths())
    const diffDays = parseInt(duration.asDays())
    const diffHours = parseInt(duration.asHours())
    const diffMinutes = parseInt(duration.asMinutes())
    const diffSeconds = parseInt(duration.asSeconds())
 
    if (diffYears > 0) {
        return `${diffYears} ano(s)`
    }

    if (diffMonths > 0) {
        return `${diffMonths} mese(s)`
    }

    if (diffDays > 0) {
        return `${diffDays} dia(s)`
    }

    if (diffHours > 0) {
        return `${diffHours} hora(s)`
    }

    if (diffMinutes > 0) {
        return `${diffMinutes} minuto(s)`
    }

    return `${diffSeconds} segundo(s)`
}