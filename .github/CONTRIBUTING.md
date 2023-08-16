<!--

    Copyright (c) 2019-present Sonatype, Inc.
    This program and the accompanying materials are made available under
    the terms of the Eclipse Public License 2.0 which accompanies this
    distribution and is available at https://www.eclipse.org/legal/epl-2.0/.

-->

# How to be a contributor to this project
The Sonatype React Shared Components are now to be developed under a "federated" development model, meaning that
developers from anywhere across the Sonatype engineering organization are not only allowed but expected to contribute
changes to the RSC as needed for the work alloted to their respective dev teams. Leadership on the RSC project is
provided by way of a Steering Committee composed of Glen Hunter, Jason Swearingen, and Ross Pokorny. Discussion about
the RSC (including contact with the Steering Committee) is best accomplished on the #react-components Slack channel.

## Steps to contribute

### Design
As a UI-centric library, most changes to RSC involve visual and UX design. As such, a typical RSC contribution might
start with the contributing team's designer contacting the Steering Committee's designer: Jason Swearingen. A JIRA
ticket should also be created. It should be within the RSC JIRA project but may freely be assigned to the JIRA team and
sprint(s) representing the contributors and their schedule. Like most UI tickets generally, the ticket very well might
not be assigned to a sprint until after the design phase.

RSC's JIRA flow include several workflow steps prior to "Ready for Development" which represent the design process and
which should be used where appropriate: "Needs Design", "Design in Progress", and "Design Review". Once the designers
believe that the design is ready, it should be reviewed by the relevant product owner and developers: representatives
from the contributing team and Ross Pokorny from the steering committee. This review step enables developers to give
feedback on feasibility as well as any issues they see in the design.

### Development and Review
Once a ticket's design is deemed satisfactory to everyone involved, it moves to "Ready for Development". For
contributing teams using Scrum, this is typically the point at which they would add the ticket to a sprint. From here,
the RSC JIRA flow is similar to that of other projects. After "Ready for Development" are "In Progress", "Waiting for
Review", "Testing", and "Done". Tickets should be implemented during the "In Progress" phase (see the checklist below)
and then a pull request submitted for review. PR Review is performed during the "Waiting for Review" phase. See the
[Submitting a PR](#submitting-a-pr) section below for PR expectations.

### Merging and Testing
Once a PR has passed all necessary approvals and checks, it may be merged. On RSC, we do official manual testing _after_
the PR is merged (though the developer should of course be manually testing their work during development, and reviewers
might do so as well). Once the PR is merged, the ticket should be moved to the "Testing" JIRA phase and unassigned.
Another member of your team should then assign it to themselves and test it. Manual testing should be done in current
versions of: at least one Chromium-based browser (e.g. Chrome or Edge), Firefox, and Safari. If issues are discovered,
they shoul be filed as Defect subtasks in JIRA, moved to Ready for Development, and fixed promptly. The Defect tickets
go through the entire development cycle including their own PR review and testing phases.

Once a ticket has passed testing and any Defect tickets are fixed, the ticket should be moved to Done.

## Using your RSC contribution in a downstream project
Jenkins is configured to automatically build the RSC main branch when it detects a new commit, and it is configured to
release a new version of RSC on every main branch build. As a result, within an hour of your PR being merged a new
version of RSC should automatically get published with your changes.

## Implementation checklist
A well-formed contribution to the RSC has quite a few considerations beyond the bare minimum. Be sure the fulfill all of
the following, as applicable:

* Does your contribution have Jest/RTL unit tests?
* Is your contribution documented in the gallery?
* Does your contribution have visual tests of every substantially different visual state?
* If your contribution involves component state, have you created separate stateless and "stateful" versions of the
  component? (see `NxDropdown` vs `NxStatefulDropdown` for an example)
  * Does it make sense for your component's state needs to be implemented via exported helper functions? (see
    nxTextInputStateHelpers for an example)
* Does your contribution support appropriate keyboard navigation? For common complex component patterns
  consult https://www.w3.org/WAI/ARIA/apg/patterns/
  * Does the keyboard navigation have automated tests, either in RTL or in the visual test suite?
* Does your contribution perform well with screenreaders? Have you implemented all appropriate ARIA metadata? See
  https://www.w3.org/WAI/ARIA/apg/patterns/ and https://www.w3.org/TR/wai-aria-1.2/
  * Have you included an "a11yCheck" test in the visual test suite for your component?
* If your contribution is a new component, have you added the component to the Server-Side Rendering Tests?
* Have you added an appropriate version number bump to the lib and gallery `package.json` files?

## Submitting a PR

* Add sonatype/rsc-steering as a reviewer to the PR
* PRs must be approved by Ross Pokorny and (if they involve design changes) Jason Swearingen.
  You may also want to get an approval from another member of your development team.
* Github is configured to enforce that a PR may only be merged to `main` once it has a passing CI build, at least one
  approval, and has the latest from `main` merged into ti.

### PR commenting protocol

Here are the general rules to follow when commenting on PRs for this repo:

* When responding to a comment, always blockquote what you are responding to (even if it is the entire previous
  comment).  This allows PR emails to have the necessary conversation context that they otherwise lack
* When you as the PR author make a change in response to a comment, respond to that comment and include the commit hash
  where you made the fix.  Do not resolve the thread
* The originator of a thread should be the person to mark that thread resolved, typically after reviewing the commit
  referenced in the response comment from the PR author and finding it acceptable.
* Unless stated otherwise by the commenter, or clearly not meant to be responded to, all comments on a PR are expected
  to be addressed before it is merged. Sometimes it is alright for a reviewer to approve the PR before all of their
  comments are addressed, but generally only when those comments are expected to be easily addressable without further
  discussion (for example simple formatting issues).  Even in this case though, the comments should still be addressed
  post-approval
