// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(connection) {
  // [START cloudbuild_v2_generated_RepositoryManager_UpdateConnection_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Connection to update.
   */
  // const connection = {}
  /**
   *  The list of fields to be updated.
   */
  // const updateMask = {}
  /**
   *  If set to true, and the connection is not found a new connection
   *  will be created. In this situation `update_mask` is ignored.
   *  The creation will succeed only if the input connection has all the
   *  necessary information (e.g a github_config with both  user_oauth_token and
   *  installation_id properties).
   */
  // const allowMissing = true
  /**
   *  The current etag of the connection.
   *  If an etag is provided and does not match the current etag of the
   *  connection, update will be blocked and an ABORTED error will be returned.
   */
  // const etag = 'abc123'

  // Imports the Cloudbuild library
  const {RepositoryManagerClient} = require('@google-cloud/cloudbuild').v2;

  // Instantiates a client
  const cloudbuildClient = new RepositoryManagerClient();

  async function callUpdateConnection() {
    // Construct request
    const request = {
      connection,
    };

    // Run request
    const [operation] = await cloudbuildClient.updateConnection(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateConnection();
  // [END cloudbuild_v2_generated_RepositoryManager_UpdateConnection_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));