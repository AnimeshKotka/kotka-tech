---
title: Intro to AWS
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 6
---

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={6} />

## Regions and Availability Zones in AWS

### Region
A Region is a geographical area composed of multiple Availability Zones. It is a distinct location with independent failure domains. 

**Key Considerations for Region Selection:**
* **Compliance:** Adherence to data residency laws and regulations.
* **Latency:** Proximity to end-users for optimal performance.
* **Service Availability:** Not all services and features are available in every Region.
* **Pricing:** Regional pricing variations.

**Example Regions:**
* `us-east-1` (US East (N. Virginia))
* `ap-south-1` (Asia Pacific (Mumbai))

### Availability Zone (AZ)
An Availability Zone is a distinct location within a Region, physically isolated from other Availability Zones. It consists of one or more data centers, each with independent power, cooling, and networking. 

**Key Characteristics of Availability Zones:**
* **Isolation:** Protects against single points of failure.
* **High-Speed Networking:** Ensures low-latency communication between AZs.
* **Unique Identifiers:** AZ IDs are used to coordinate across multiple AWS accounts.

**Example Availability Zones in the `us-east-1` Region:**
* `us-east-1a`
* `us-east-1b`
* `us-east-1c`