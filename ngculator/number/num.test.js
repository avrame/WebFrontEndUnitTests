describe("ncNum", () => {
    let InputService;
    let $compile;
    let $rootScope;

    beforeEach(inject((_InputService_, _$compile_, _$rootScope_) => {
        InputService = _InputService_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe("click", () => {
        it("appends number value on click", () => {
            InputService.clear();
            const $scope = $rootScope.$new();
            const element1 = angular.element("<nc-num num=1></nc-num>");
            const element2 = angular.element("<nc-num num=2></nc-num>");
            const element3 = angular.element("<nc-num num=3></nc-num>");
            $compile(element1)($scope);
            $compile(element2)($scope);
            $compile(element3)($scope);

            element1.children().triggerHandler('click');
            element2.children().triggerHandler('click');
            element3.children().triggerHandler('click');
            $scope.$apply();

            expect(InputService.num).to.equal(123);
        });
    });
});
