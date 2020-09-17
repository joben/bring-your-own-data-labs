/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJobs = /* GraphQL */ `
  mutation CreateJobs(
    $input: CreateJobsInput!
    $condition: ModelJobsConditionInput
  ) {
    createJobs(input: $input, condition: $condition) {
      id
      start_ts
      end_ts
      filename
      filename_version
      status
      warnings
      errors
      staged
      meta
      createdAt
      updatedAt
    }
  }
`;
export const updateJobs = /* GraphQL */ `
  mutation UpdateJobs(
    $input: UpdateJobsInput!
    $condition: ModelJobsConditionInput
  ) {
    updateJobs(input: $input, condition: $condition) {
      id
      start_ts
      end_ts
      filename
      filename_version
      status
      warnings
      errors
      staged
      meta
      createdAt
      updatedAt
    }
  }
`;
export const deleteJobs = /* GraphQL */ `
  mutation DeleteJobs(
    $input: DeleteJobsInput!
    $condition: ModelJobsConditionInput
  ) {
    deleteJobs(input: $input, condition: $condition) {
      id
      start_ts
      end_ts
      filename
      filename_version
      status
      warnings
      errors
      staged
      meta
      createdAt
      updatedAt
    }
  }
`;