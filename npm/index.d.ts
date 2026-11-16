declare module '@apiverve/universitylookup' {
  export interface universitylookupOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface universitylookupResponse {
    status: string;
    error: string | null;
    data: UniversityLookupData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface UniversityLookupData {
      domain:           null;
      isAcademicDomain: null;
      matchType:        null;
      matchedDomain:    null;
      count:            number | null;
      totalMatches:     number | null;
      universities:     University[];
  }
  
  interface University {
      id:                  null | string;
      name:                null | string;
      aliases:             (null | string)[];
      country:             null | string;
      countryCode:         null | string;
      stateProvince:       null | string;
      city:                null | string;
      address:             null | string;
      zip:                 null | string;
      latitude:            number | null;
      longitude:           number | null;
      timezone:            null | string;
      domains:             (null | string)[];
      website:             null | string;
      phone:               null | string;
      ipedsUnitID:         number | null;
      control:             null | string;
      level:               null | string;
      highestDegree:       null | string;
      offersUndergraduate: boolean | null;
      offersGraduate:      boolean | null;
      hbcu:                boolean | null;
      tribal:              boolean | null;
      landGrant:           boolean | null;
      locale:              null | string;
      sizeBand:            null | string;
      system:              null;
      stats:               Stats;
  }
  
  interface Stats {
      enrollmentTotal:           number | null;
      enrollmentUndergraduate:   number | null;
      enrollmentGraduate:        number | null;
      studentFacultyRatio:       number | null;
      admissionRate:             number | null;
      tuitionInDistrict:         number | null;
      tuitionInState:            number | null;
      tuitionOutOfState:         number | null;
      graduateTuitionInState:    number | null;
      graduateTuitionOutOfState: number | null;
      roomAndBoard:              number | null;
      tuitionYear:               null | string;
      enrollmentYear:            number | null;
  }

  export default class universitylookupWrapper {
    constructor(options: universitylookupOptions);

    execute(callback: (error: any, data: universitylookupResponse | null) => void): Promise<universitylookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: universitylookupResponse | null) => void): Promise<universitylookupResponse>;
    execute(query?: Record<string, any>): Promise<universitylookupResponse>;
  }
}
