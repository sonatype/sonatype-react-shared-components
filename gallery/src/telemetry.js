/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

export function init() {
  // Filled in via the webpack EnvironmentPlugin
  const apiKey = process.env.PX_API_KEY;

  if (apiKey) {
    // This blob of code is provided by the gainsight admin interface to initialize PX. For legal reasons, it
    // presumably cannot be de-obfuscated
    /* eslint-disable */
    (function(n,t,a,e,co){var i='aptrinsic';n[i]=n[i]||function(){
        (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
      var r=t.createElement('script');r.async=!0,r.src=a+'?a='+e;
      var c=t.getElementsByTagName('script')[0];c.parentNode.insertBefore(r,c)
    })(window,document,'https://web-sdk.aptrinsic.com/api/aptrinsic.js', apiKey);

    aptrinsic('identify', { id: 'default-gallery-user' });
    /* eslint-enable */
  }
}
