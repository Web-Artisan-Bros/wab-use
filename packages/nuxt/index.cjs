'use strict';

function resolveElements(elements, scope, selectorCache) {
    if (typeof elements === "string") {
        let root = document;
        {
            elements = root.querySelectorAll(elements);
        }
    }
    else if (elements instanceof Element) {
        elements = [elements];
    }
    /**
     * Return an empty array
     */
    return Array.from(elements || []);
}

const thresholds = {
    some: 0,
    all: 1,
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = resolveElements(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries) => {
        entries.forEach((entry) => {
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */
            if (entry.isIntersecting === Boolean(onEnd))
                return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                }
                else {
                    observer.unobserve(entry.target);
                }
            }
            else if (onEnd) {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount],
    });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
}

function useInView(el, options) {
    const state = ref(false);
    onNuxtReady(() => {
        watch(() => el, (el) => {
            if (!el || isRef(el) && !el.value)
                return;
            inView(isRef(el) ? el.value : el, ({ target }) => {
                state.value = true;
                options && options.onInView && options.onInView(target);
                return () => {
                    state.value = false;
                    options && options.onOutView && options.onOutView(target);
                };
            }, {
                // @ts-ignore
                amount: 0.1,
                ...(options ?? {})
            });
        }, { immediate: true });
    });
    return computed(() => state.value);
}

function useProxyMedia(path) {
    const { origin } = useRequestURL();
    const toReturn = [origin, path];
    if (origin.startsWith('http://')) {
        toReturn[0] = origin.replace('http://', 'https://');
    }
    return toReturn.join('');
}

function useTouchOnly() {
    const isTouchOnly = ref(false);
    onNuxtReady(() => {
        isTouchOnly.value = window.matchMedia('(any-pointer: coarse)').matches;
    });
    return { isTouchOnly };
}

exports.useInView = useInView;
exports.useProxyMedia = useProxyMedia;
exports.useTouchOnly = useTouchOnly;
