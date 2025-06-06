import { ObjectRecord } from '@/object-record/types/ObjectRecord';
import { isDefined } from 'twenty-shared/utils';
import { generatedMockObjectMetadataItems } from '~/testing/mock-data/generatedMockObjectMetadataItems';

export const companiesQueryResult = {
  companies: {
    __typename: 'CompanyConnection',
    totalCount: 13,
    pageInfo: {
      __typename: 'PageInfo',
      hasNextPage: false,
      startCursor:
        'WzEsICIyMDIwMjAyMC0zZWMzLTRmZTMtODk5Ny1iNzZhYTBiZmE0MDgiXQ==',
      endCursor: 'WzEzLCAiMjAyMDIwMjAtMTQ1NS00YzU3LWFmYWYtZGQ1ZGMwODYzNjFkIl0=',
    },
    edges: [
      {
        __typename: 'CompanyEdge',
        cursor: 'WzEsICIyMDIwMjAyMC0zZWMzLTRmZTMtODk5Ny1iNzZhYTBiZmE0MDgiXQ==',
        node: {
          __typename: 'Company',
          id: '20202020-3ec3-4fe3-8997-b76aa0bfa408',
          employees: 100,
          createdAt: '2025-01-05T09:00:20.412Z',
          updatedAt: '2025-01-05T10:15:30.412Z',
          name: 'Linkedin',
          accountOwnerId: null,
          accountOwner: null,
          domainName: {
            __typename: 'Links',
            primaryLinkLabel: 'https://linkedin.com',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          address: {
            __typename: 'Address',
            addressLine1: '',
            addressLine2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          position: 1,
          idealCustomerProfile: true,
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          previousEmployees: {
            __typename: 'Person',
            id: '20202020-2d40-4e49-8df4-9c6a049191de',
            email: 'louis.duss@google.com',
            position: 14,
            testJson: null,
            testRating: null,
            companyId: '20202020-c21e-4ec2-873b-de4264d89025',
            avatarUrl: '',
            updatedAt: '2025-01-05T11:36:42.400Z',
            testMultiSelect: null,
            testBoolean: true,
            testSelect: 'OPTION_1',
            testDateOnly: null,
            bestCompanyId: null,
            testUuid: null,
            phone: '+33788901234',
            createdAt: '2025-01-05T09:00:20.412Z',
            city: 'Seattle',
            testPhone: '',
            jobTitle: 'CTO',
            testCurrency: {
              __typename: 'Currency',
              amountMicros: null,
              currencyCode: 'USD',
            },
            xLink: {
              __typename: 'Links',
              primaryLinkLabel: '',
              primaryLinkUrl: 'twitter.com',
            },
            testLinks: {
              __typename: 'Links',
              primaryLinkUrl: '',
              primaryLinkLabel: '',
              secondaryLinks: [],
            },
            name: {
              __typename: 'FullName',
              firstName: 'Louis',
              lastName: 'Duss',
            },
            linkedinLink: {
              __typename: 'Links',
              primaryLinkLabel: '',
              primaryLinkUrl: 'linkedin.com',
            },
            testAddress: {
              __typename: 'Address',
              addressStreet1: '',
              addressStreet2: '',
              addressCity: '',
              addressState: '',
              addressCountry: '',
              addressPostcode: '',
              addressLat: null,
              addressLng: null,
            },
            testLink: {
              __typename: 'Links',
              primaryLinkLabel: '',
              primaryLinkUrl: '',
            },
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzIsICIyMDIwMjAyMC01ZDgxLTQ2ZDYtYmY4My1mN2ZkMzNlYTYxMDIiXQ==',
        node: {
          __typename: 'Company',
          id: '20202020-5d81-46d6-bf83-f7fd33ea6102',
          employees: null,
          createdAt: '2025-01-06T08:30:15.412Z',
          updatedAt: '2025-01-06T14:45:22.412Z',
          name: 'Facebook',
          idealCustomerProfile: false,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://facebook.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 2,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzMsICIyMDIwMjAyMC0wNzEzLTQwYTUtODIxNi04MjgwMjQwMWQzM2UiXQ==',
        node: {
          __typename: 'Company',
          id: '20202020-0713-40a5-8216-82802401d33e',
          employees: null,
          createdAt: '2025-01-07T10:15:30.412Z',
          updatedAt: '2025-01-07T16:20:45.412Z',
          name: 'Anthropic',
          idealCustomerProfile: false,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://anthropic.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 3,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzQsICIyMDIwMjAyMC1lZDg5LTQxM2EtYjMxYS05NjI5ODZlNjdiYjQiXQ==',
        node: {
          __typename: 'Company',
          id: '20202020-ed89-413a-b31a-962986e67bb4',
          employees: null,
          createdAt: '2025-01-08T11:45:10.412Z',
          updatedAt: '2025-01-08T17:30:25.412Z',
          name: 'Microsoft',
          idealCustomerProfile: true,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://microsoft.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 4,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzUsICIyMDIwMjAyMC0xNzFlLTRiY2MtOWNmNy00MzQ0OGQ2ZmIyNzgiXQ==',
        node: {
          __typename: 'Company',
          id: '20202020-171e-4bcc-9cf7-43448d6fb278',
          employees: null,
          createdAt: '2025-01-09T09:20:45.412Z',
          updatedAt: '2025-01-09T15:10:30.412Z',
          name: 'Airbnb',
          idealCustomerProfile: true,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://airbnb.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 5,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzYsICIyMDIwMjAyMC1jMjFlLTRlYzItODczYi1kZTQyNjRkODkwMjUiXQ==',
        node: {
          __typename: 'Company',
          id: '20202020-c21e-4ec2-873b-de4264d89025',
          employees: null,
          createdAt: '2025-01-10T13:30:20.412Z',
          updatedAt: '2025-01-10T18:45:35.412Z',
          name: 'Google',
          idealCustomerProfile: false,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://google.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 6,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzcsICIyMDIwMjAyMC03MDdlLTQ0ZGMtYTFkMi0zMDAzMGJmMWE5NDQiXQ==',
        node: {
          __typename: 'Company',
          id: '20202020-707e-44dc-a1d2-30030bf1a944',
          employees: null,
          createdAt: '2025-01-11T07:15:50.412Z',
          updatedAt: '2025-01-11T12:25:15.412Z',
          name: 'Netflix',
          idealCustomerProfile: true,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://netflix.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 7,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzgsICIyMDIwMjAyMC0zZjc0LTQ5MmQtYTEwMS0yYTcwZjUwYTE2NDUiXQ==',
        node: {
          __typename: 'Company',
          id: '20202020-3f74-492d-a101-2a70f50a1645',
          employees: null,
          createdAt: '2025-01-12T14:40:25.412Z',
          updatedAt: '2025-01-12T19:55:40.412Z',
          name: 'Libeo',
          idealCustomerProfile: false,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://libeo.io',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 8,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzksICIyMDIwMjAyMC1jZmJmLTQxNTYtYTc5MC1lMzk4NTRkY2Q0ZWIiXQ==',
        node: {
          __typename: 'Company',
          id: '20202020-cfbf-4156-a790-e39854dcd4eb',
          employees: null,
          createdAt: '2025-01-13T08:25:35.412Z',
          updatedAt: '2025-01-13T13:40:50.412Z',
          name: 'Claap',
          idealCustomerProfile: false,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://claap.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 9,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzEwLCAiMjAyMDIwMjAtZjg2Yi00MTlmLWI3OTQtMDIzMTlhYmU4NjM3Il0=',
        node: {
          __typename: 'Company',
          id: '20202020-f86b-419f-b794-02319abe8637',
          employees: null,
          createdAt: '2025-01-14T16:10:15.412Z',
          updatedAt: '2025-01-14T21:30:25.412Z',
          name: 'Hasura',
          idealCustomerProfile: false,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://hasura.io',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 10,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzExLCAiMjAyMDIwMjAtNTUxOC00NTUzLTk0MzMtNDJkOGViODI4MzRiIl0=',
        node: {
          __typename: 'Company',
          id: '20202020-5518-4553-9433-42d8eb82834b',
          employees: null,
          createdAt: '2025-01-15T12:50:40.412Z',
          updatedAt: '2025-01-15T17:15:55.412Z',
          name: 'Wework',
          idealCustomerProfile: false,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://wework.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 11,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzEyLCAiMjAyMDIwMjAtZjc5ZS00MGRkLWJkMDYtYzM2ZTZhYmI0Njc4Il0=',
        node: {
          __typename: 'Company',
          id: '20202020-f79e-40dd-bd06-c36e6abb4678',
          employees: null,
          createdAt: '2025-01-16T10:35:20.412Z',
          updatedAt: '2025-01-16T15:50:35.412Z',
          name: 'Samsung',
          idealCustomerProfile: false,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://samsung.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 12,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
      {
        __typename: 'CompanyEdge',
        cursor: 'WzEzLCAiMjAyMDIwMjAtMTQ1NS00YzU3LWFmYWYtZGQ1ZGMwODYzNjFkIl0=',
        node: {
          __typename: 'Company',
          id: '20202020-1455-4c57-afaf-dd5dc086361d',
          employees: null,
          createdAt: '2025-01-17T11:20:10.412Z',
          updatedAt: '2025-01-17T16:45:25.412Z',
          name: 'Algolia',
          idealCustomerProfile: false,
          accountOwner: null,
          accountOwnerId: null,
          domainName: {
            __typename: 'Links',
            primaryLinkUrl: 'https://algolia.com',
            primaryLinkLabel: '',
            secondaryLinks: [],
          },
          address: {
            addressStreet1: '',
            addressStreet2: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressPostcode: '',
            addressLat: null,
            addressLng: null,
          },
          previousEmployees: null,
          annualRecurringRevenue: {
            __typename: 'Currency',
            amountMicros: null,
            currencyCode: '',
          },
          position: 13,
          xLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
          linkedinLink: {
            __typename: 'Links',
            primaryLinkLabel: '',
            primaryLinkUrl: '',
            secondaryLinks: [],
          },
        },
      },
    ],
  },
};

const allMockedCompanyRecords = companiesQueryResult.companies.edges.map(
  (edge) => edge.node,
);
export const getCompaniesMock = () => {
  return [...allMockedCompanyRecords];
};

export const getMockCompanyObjectMetadataItem = () => {
  const companyObjectMetadataItem = generatedMockObjectMetadataItems.find(
    (item) => item.nameSingular === 'company',
  );

  if (!companyObjectMetadataItem) {
    throw new Error('Company object metadata item not found');
  }

  return companyObjectMetadataItem;
};
export const getCompanyDuplicateMock = () => {
  return {
    ...companiesQueryResult.companies.edges[0].node,
    id: '8b40856a-2ec9-4c03-8bc0-c032c89e1824',
  };
};

export const getMockCompanyRecord = (
  overrides?: Partial<ObjectRecord>,
  index = 0,
) => {
  return {
    ...allMockedCompanyRecords[index],
    ...overrides,
  };
};

export const findMockCompanyRecord = ({
  id: queriedCompanyId,
}: Pick<ObjectRecord, 'id'>) => {
  const company = allMockedCompanyRecords.find(
    ({ id: currentCompanyId }) => currentCompanyId === queriedCompanyId,
  );

  if (!isDefined(company)) {
    throw new Error(`Could not find company with id, ${queriedCompanyId}`);
  }

  return company;
};

export const getEmptyCompanyMock = () => {
  return {
    id: '9231e6ee-4cc2-4c7b-8c55-dff16f4d968a',
    name: '',
    domainName: {
      __typename: 'Links',
      primaryLinkUrl: '',
      primaryLinkLabel: '',
      secondaryLinks: [],
    },
    address: {},
    accountOwner: null,
    createdAt: null,
    updatedAt: null,
    employees: null,
    idealCustomerProfile: null,
    linkedinLink: null,
    xLink: null,
    _activityCount: null,
    __typename: 'Company',
  };
};
