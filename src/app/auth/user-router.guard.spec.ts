import { TestBed } from '@angular/core/testing';

import { UserRouterGuard } from './user-router.guard';

describe('UserRouteGuard', () => {
  let guard: UserRouterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserRouterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
