<!--

    Copyright (c) 2019-present Sonatype, Inc.
    This program and the accompanying materials are made available under
    the terms of the Eclipse Public License 2.0 which accompanies this
    distribution and is available at https://www.eclipse.org/legal/epl-2.0/.

-->
This directory is for scss files that can be imported freely in other scss files, such as the individual component
scss files.  The files in this directory must not emit anything on their own when compiled, as anything that they
do emit would be duplicated every time one of the files is imported
