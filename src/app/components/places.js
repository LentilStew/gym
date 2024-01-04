export class Visit {
  constructor(date, time, duration, nextActivitySegment, prevActivitySegment) {
    this.date = date;
    this.time = time;
    this.duration = duration;
    this.prevActivitySegment = prevActivitySegment
    this.nextActivitySegment = nextActivitySegment

  }
}
export class ActivitySegment {
  constructor(date, time, duration, distance, activityType, startLong, startLat, endLong, endLat) {
    
    this.date = date;
    this.time = time
    this.duration = duration
    
    this.distance = distance
    this.activityType = activityType

    this.startLong = startLong;
    this.startLat = startLat;
    
    this.endLong = endLong;
    this.endLat = endLat;
  }
}

export class Place {
  constructor(address, placeId, name) {
    this.address = address;
    this.placeId = placeId;
    this.name = name;
    this.visit = {};
  }

  getBestName() {
    return this.name || this.address || this.id;
  }

  addVisit(newVisit) {
    const [year, month] = newVisit.date.split("-");

    this.visit[year] = this.visit[year] || {};
    this.visit[year][month] = this.visit[year][month] || [];
    this.visit[year][month].push(newVisit);
    return this;
  }

  hasVisitInPeriod(startYear, endYear, startMonth, endMonth) {
    return Object.keys(this.visit).some((year) => {
      year = parseInt(year);
      if (year < startYear || year > endYear) return false;

      return Object.keys(this.visit[year]).some((month) => {
        month = parseInt(month);

        if (year === startYear && month < startMonth) return false;
        if (year === endYear && month > endMonth) return false;

        return true;
      });
    });
  }

  getVisitsInPeriod(startYear, endYear, startMonth, endMonth) {
    let visits = [];
    Object.keys(this.visit).forEach((year) => {
      let yearInt = parseInt(year);
      if (yearInt < startYear || yearInt > endYear) return;

      Object.keys(this.visit[year]).forEach((month) => {
        let monthInt = parseInt(month);
        if (yearInt === startYear && monthInt < startMonth) return;
        if (yearInt === endYear && monthInt > endMonth) return;

        visits.push(...this.visit[year][month]);
      });
    });
    return visits;
  }

  toJSON() {
    const { address, placeId, name, visit } = this;
    return { address, placeId, name, visit };
  }
}
