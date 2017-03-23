## W3C Vehicle Information Service Specification Test Cases

### General information

TIMEOUT setting

### 0050-init-success.html

### 0060-init-error.html

### 0070-init-wrong-subproto-error.html

### 0080-authorize-success.html

### 0090-authorize-error.html

### 0100-getVss-success.html

### 0105-getVss-no-path-success.html

### 0110-getVss-wildcard-success.html

### 0120-getVss-incorrect-error.html

### 0130-get-success.html

### 0140-get-wildcard-success.html

### 0150-get-invalid-path-error.html

### 0160-set-success.html

### 0170-set-error.html

### 0180-subscribe-success.html

### 0190-subscribe-notification-success.html

### 0200-subscribe-unique-id-success.html

### 0210-subscribe-error.html

### 0240-unsubscribe-success.html

### 0250-unsubscribe-error.html

### 0260-unsubscribeall-success.html

After receiving success response of `unsubscribeAll`,
 confirm all subscriptions are really unsubscribed by
 watching no `subscriptionNotification` will be returned
 for a certain time.
Adjust the waiting time if it is too short or too long.

### 0280-subscribe-branch-error.html

### 0290-subscribe-filter-interval-success.html

### 0300-subscribe-filter-range-success.html

### 0310-subscribe-filter-minchange-success.html

### 0320-subscribe-filter-mixed-success.html


